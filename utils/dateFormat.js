const dateFormat = timestamp => {
    const date = new Date(timestamp);
    
    // Format date as MM/DD/YYYY
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    
    // Format time as h:mm AM/PM
    let hours = date.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes} ${period}`;
    
    return `${formattedDate} at ${formattedTime}`;
  };
  
  module.exports = dateFormat;