const DriverController = {
    get: async (req, res) => res.status(200).json({ message: "sent" })
};

module.exports = DriverController;