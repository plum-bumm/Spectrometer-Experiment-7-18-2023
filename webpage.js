var ALTA5layout = {
  title: {
    text: "Reflectance Spectrum: Orange Folder - ALTA 5",
    font: {
      family: "Courier New, monospace",
      size: 24
    },
    xref: "paper",
    x: 0.05
  },
  paper_bgcolor: "White",
  xaxis: {
    title: {
      text: "Color/Wavelength (nm)",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    }
  },
  yaxis: {
    title: {
      text: "% Reflectance",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    }
  }
};

ALTA5 = document.getElementById("ALTA5");
Plotly.newPlot(
  ALTA5,
  [
    {
      x: [
        "Blue 470 nm",
        "Cyan 525 nm",
        "Green 560 nm",
        "Yellow 585 nm",
        "Orange 600 nm",
        "Red 645 nm",
        "Deep Red 700 nm",
        "IR1 735 nm",
        "IR2 810 nm",
        "IR3 880 nm",
        "IR4 940 nm"
      ],
      y: [
        -0.1904761905,
        8.551483421,
        21.30584192,
        78.5840708,
        98.47972973,
        111.7073171,
        118.5314685,
        118.9716312,
        117.2302738,
        116.252073,
        120.9775967
      ],
  line: {
    color: '#cc5200',
    width: 3
  }
    }
  ],
  ALTA5layout
);

var ALTA3layout = {
  title: {
    text: "Reflectance Spectrum: Orange Folder - ALTA 3",
    font: {
      family: "Courier New, monospace",
      size: 24
    },
    xref: "paper",
    x: 0.05
  },
  paper_bgcolor: "White",
  xaxis: {
    title: {
      text: "Color/Wavelength (nm)",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    },
    
  },
  yaxis: {
    title: {
      text: "% Reflectance",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    }
  }
};

ALTA3 = document.getElementById("ALTA3");
Plotly.newPlot(
  ALTA3,
  [
    {
      x: [
        "Blue 470 nm",
        "Cyan 525 nm",
        "Green 560 nm",
        "Yellow 585 nm",
        "Orange 600 nm",
        "Red 645 nm",
        "Deep Red 700 nm",
        "IR1 735 nm",
        "IR2 810 nm",
        "IR3 880 nm",
        "IR4 940 nm"
      ],
      y: [
        13.75404531,
        20.76813656,
        30.05865103,
        70.49689441,
        89.48194662,
        102.9950083,
        107.6923077,
        109.7744361,
        111.6013072,
        112.312812,
        112.2047244
      ],
  line: {
    color: '#cc5200',
    width: 3
  }
    }
  ],
  ALTA3layout
);