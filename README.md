# Benchmark Dashboard

This project is a benchmark dashboard implementation that displays key performance indicators (KPIs) with an interactive user interface. The dashboard includes a banner with KPI cards, buttons for selecting data periods, calendar dropdowns for date selection, and a toggle for activating a benchmark period.

## Project Structure

```
benchmark-dashboard
├── src
│   ├── components
│   │   ├── Banner.tsx        # Renders the banner section with KPI cards
│   │   ├── Card.tsx          # Displays individual KPI values
│   │   ├── Button.tsx        # Renders buttons for data period selection
│   │   ├── CalendarDropdown.tsx # Provides a dropdown for date selection
│   │   └── Slider.tsx        # Implements an ON/OFF toggle for benchmark activation
│   ├── styles
│   │   └── colors.ts         # Contains color constants for the application
│   ├── App.tsx               # Main application component
│   └── index.tsx             # Entry point of the application
├── public
│   ├── index.html            # HTML template for the application
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd benchmark-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Features

- **KPI Display**: View key performance indicators in a visually appealing format.
- **Data Period Selection**: Choose between Day, Week, and Month for data analysis.
- **Date Selection**: Use calendar dropdowns to select specific dates or periods.
- **Benchmark Activation**: Toggle the benchmark period on or off for comparative analysis.

## Colors

The primary colors used in the dashboard are:
- Primary Color: `#859527`
- Secondary Color: `#f39700`

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.