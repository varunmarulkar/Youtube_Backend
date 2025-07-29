import ChannelModel from "../Models/Channel.model.js";

// Create a new channel
export async function channelCreate(req, res) {
  try {
    const { channelName, handle, logo, owner } = req.body

    // Check if required fields are missing
    if (!channelName || !handle || !logo || !owner) {
      return res.status(400).json({ message: "Required Fields Missing" })
    }

    // Check if user already has a channel
    const existingChannel = await ChannelModel.findOne({ owner });
    if (existingChannel) {
      return res.status(409).json({ message: "You already have a channel", channelId: existingChannel._id });
    }

    // Check if handle is already in use
    const isExisting = await ChannelModel.findOne({ handle })

    if (isExisting) {
      return res.status(409).json({ message: "channel handle is already exists" })
    }

    // Create and save the new channel
    const newChannel = await ChannelModel.create({
      channelName, handle, logo, owner
    })

    res.status(201).json({ message: "new channel has been added", newChannel })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// get all channels
export async function getChannel(req, res) {
  try {
    const channel = await ChannelModel.find()
    if (!channel) {
      return res.status(404).json({ message: "channel has not found" })
    }
    res.status(200).json(channel)
  }

  catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// get channel by id
export async function getChannelById(req, res) {
  try {
    const { id } = req.params
    const channel = await ChannelModel.findById(id)

    if (!channel) {
      return res.status(404).json({ message: "channel has not found" })
    }
    res.status(200).json({ messsage: "channel has found", channel })
  }

  catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// delete channel by id
export async function deleteChannel(req, res) {
  try {
    const { id } = req.params
    const deletedVideo = await ChannelModel.findByIdAndDelete(id)
    if (!deletedVideo) {
      return res.status(404).json({ message: "channel has not found" })
    }
    res.status(200).json({ mesaage: "channel has been deleted" })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// update channel by id
export async function updateChannel(req, res) {
  try {
    const { id } = req.params
    const updatedVideo = await ChannelModel.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedVideo) {
      return res.status(404).json({ message: "channel has not found" })
    }
    res.status(200).json({ mesaage: "channel has been deleted" })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export async function getChannelByUserId(req, res) {
  try {
    const { userId } = req.params;
    const channel = await ChannelModel.findOne({ owner: userId });

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.status(200).json({ channel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}