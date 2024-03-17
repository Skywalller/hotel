const data = {
  name: "Deluxe Rooom",
  data: {
    "18-03-2024": {
      price: 10.99,
      availability: true,
      inventory: 0,
    },
    "19-03-2024": {
      price: 10.99,
      availability: true,
      inventory: 0,
    },
    "20-03-2024": {
      price: 10.99,
      availability: true,
      inventory: 0,
    },
  },
};
// Function to check availability between start and end dates
const isRoomAvailable = (startDate, endDate) => {
  // Convert start and end dates to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Iterate over dates in the range
  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    // Format date to match the format in the data object
    const formattedDate = formatDate(date);

    // Check if the room is available for the current date
    if (!data.data[formattedDate] || !data.data[formattedDate].availability) {
      return false; // Room is not available for at least one date in the range
    }
  }

  return true; // Room is available for all dates in the range
};

// Function to format date as "dd-mm-yyyy"
const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Example usage
const startDate = "25-03-2024";
const endDate = "30-03-2024";
const isAvailable = isRoomAvailable(startDate, endDate);
console.log(`Is room available between ${startDate} and ${endDate}? ${isAvailable}`);
