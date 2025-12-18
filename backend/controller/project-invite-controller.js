import ProjectInvite from '../model/project-invite-model.js';
import Project from '../model/project-model.js';

// Send project invite
export const sendProjectInvite = async (req, res) => {
    try {
        const { projectId, toUserId, toUserEmail, fromUserEmail, fromUserName, fromUserImage } = req.body;
        const fromUserId = req.userId;

        if (!projectId || !toUserId || !toUserEmail) {
            return res.status(400).json({ message: 'Project ID, recipient ID and email are required' });
        }

        // Check if project exists and user is owner
        const project = await Project.findOne({ _id: projectId, ownerId: fromUserId });
        if (!project) {
            return res.status(404).json({ message: 'Project not found or you are not the owner' });
        }

        // Check if already a collaborator
        if (project.collaborators.some(c => c.id === toUserId)) {
            return res.status(400).json({ message: 'User is already a collaborator' });
        }

        // Check if invite already exists
        const existingInvite = await ProjectInvite.findOne({
            projectId,
            toUserId,
            status: 'pending'
        });

        if (existingInvite) {
            return res.status(400).json({ message: 'An invite is already pending for this user' });
        }

        // Create invite
        const invite = await ProjectInvite.create({
            projectId,
            projectName: project.name,
            projectColor: project.color,
            fromUserId,
            fromUserEmail: fromUserEmail || '',
            fromUserName: fromUserName || '',
            fromUserImage: fromUserImage || '',
            toUserId,
            toUserEmail
        });

        return res.status(201).json({
            success: true,
            message: 'Invite sent',
            data: invite
        });
    } catch (error) {
        console.error('Send invite error:', error);
        return res.status(500).json({ message: error.message });
    }
};

// Get pending invites for current user
export const getPendingInvites = async (req, res) => {
    try {
        const userId = req.userId;

        const invites = await ProjectInvite.find({
            toUserId: userId,
            status: 'pending'
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: invites
        });
    } catch (error) {
        console.error('Get pending invites error:', error);
        return res.status(500).json({ message: error.message });
    }
};

// Accept invite
export const acceptInvite = async (req, res) => {
    try {
        const { inviteId } = req.params;
        const userId = req.userId;
        const { userEmail, userName, userImage } = req.body;

        const invite = await ProjectInvite.findOne({
            _id: inviteId,
            toUserId: userId,
            status: 'pending'
        });

        if (!invite) {
            return res.status(404).json({ message: 'Invite not found' });
        }

        // Add to project collaborators
        await Project.findByIdAndUpdate(invite.projectId, {
            $push: {
                collaborators: {
                    id: userId,
                    email: userEmail || invite.toUserEmail,
                    name: userName || '',
                    image: userImage || ''
                }
            }
        });

        // Update invite status
        invite.status = 'accepted';
        await invite.save();

        return res.status(200).json({
            success: true,
            message: 'Invite accepted'
        });
    } catch (error) {
        console.error('Accept invite error:', error);
        return res.status(500).json({ message: error.message });
    }
};

// Decline invite
export const declineInvite = async (req, res) => {
    try {
        const { inviteId } = req.params;
        const userId = req.userId;

        const invite = await ProjectInvite.findOne({
            _id: inviteId,
            toUserId: userId,
            status: 'pending'
        });

        if (!invite) {
            return res.status(404).json({ message: 'Invite not found' });
        }

        invite.status = 'declined';
        await invite.save();

        return res.status(200).json({
            success: true,
            message: 'Invite declined'
        });
    } catch (error) {
        console.error('Decline invite error:', error);
        return res.status(500).json({ message: error.message });
    }
};
