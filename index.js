const colors = [
    "hsl(0, 100%, 50%)",         // Red
    "hsl(30, 100%, 50%)",        // Orange-Red
    "hsl(60, 100%, 50%)",        // Yellow
    "hsl(120, 100%, 50%)",       // Green
    "hsl(180, 100%, 50%)",       // Cyan
    "hsl(210, 100%, 50%)",       // Light Blue
    "hsl(240, 100%, 50%)",       // Blue
    "hsl(270, 100%, 50%)",       // Purple
    "hsl(300, 100%, 50%)",       // Pink
    "hsl(330, 100%, 50%)",       // Light Red
    "hsl(45, 100%, 50%)",        // Orange
    "hsl(75, 100%, 50%)",        // Light Orange
    "hsl(150, 100%, 50%)",       // Light Green
    "hsl(195, 100%, 50%)",       // Light Cyan
    "hsl(315, 100%, 50%)"        // Light Purple
  ];
  
  const bgColorIndex = Math.floor(Math.random() * colors.length)

  const bgColor = colors[bgColorIndex]

  document.body.style.backgroundColor= bgColor