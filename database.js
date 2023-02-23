let rooms = [
	{
		name: "Chatterverse",
		users: [],
	},
]

function getRooms() {
	return rooms
}

function createRoom(roomName) {
	const room = {
		name: roomName,
		users: [],
	}
	rooms.push(room)
	return room
}

module.exports = {
	createRoom,
	getRooms,
}
