# Happierwork - Frontend

This Angular-based web application helps in managing budgets and positions within an organization. The project includes real-time updates for table data, WebSocket integration, and a modal for adding new positions to the list.

## Features
- **Real-time Table Updates**: Updates the table dynamically when changes are made by multiple users (e.g., CEO and CFO) via WebSocket.
- **Position Management**: Add, edit, and delete positions, along with their respective salary budgets.
- **Interactive Dashboard**: Displays a donut chart and other components for visualizing budget-related data.
- **Responsive UI**: Built with Angular Material to ensure a modern and responsive user interface.

## Technologies Used
- **Frontend**: Angular, Angular Material
- **Backend**: Django (integrated with WebSocket for real-time data updates)
- **WebSocket**: channels in  backend and rxjs/websocket in frontend for real-time synchronization of changes
- **BillBoardjs**: For data visualization in charts

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hemang-develops/happierWork-frontend.git
   cd happierWork-frontend
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the Angular development server:

   ```bash
   npm start
   ```

   The application should now be running on [http://localhost:4200](http://localhost:4200).

4. **Build the Application**

   To build the project for production:

   ```bash
   npm build
   ```

   The production-ready files will be stored in the `dist/` directory.

## Navigating the Application

1. **Login**:
   - Open the application at [http://localhost:4200](http://localhost:4200) for the local development version.
   - Use any valid email address and a password with at least 8 characters to log in.

2. **Dashboard Overview**:
   - Once logged in, you’ll be redirected to the dashboard where you can see an interactive overview of the budget data and positions.

3. **Managing Positions**:
   - To add a new position, click on the **“+ Create Position”** button (represented by a + icon) usually found on the dashboard or within a specific section for managing positions.
   - A modal dialog will open where you can enter details for the new position such as designation, department, budget, and location.
   - After entering the details, click on the **“Create”** button to submit.

4. **Real-Time Updates**:
   - After creating or modifying a position, the table and other relevant sections will update dynamically to reflect the changes.
   - All updates are synchronized in real-time, so if multiple users are making changes simultaneously, everyone will see the latest information without needing to refresh the page.

5. **Interactive Features**:
   - The dashboard includes a donut chart and other visual components for easy understanding of the budget distribution. Interactions with these components will also be reflected in real-time.

6. **Live Demo**:
   - For a static preview of the frontend, you can visit the deployed application on Vercel at [https://happier-work-frontend.vercel.app/budget](https://happier-work-frontend.vercel.app/budget). Note that this version displays static data and does not include real-time synchronization functionalities.
   - To experience real-time synchronization, you need to run the backend locally on the same machine as the frontend. Instructions for running the backend can be found in the [README file of the backend repository](https://github.com/Hemang-develops/happierWork-backend/).

## Project Structure

- **`/src/app/components/`**: Contains the main UI components, such as the budget table, donut chart, and modal dialog for adding positions.
- **`/src/app/services/`**: Includes services such as `public.service.ts` and `websocket.service.ts` for handling data fetching and WebSocket integration.
- **`/src/app/interface/`**: Defines TypeScript interfaces for structured data.

## Real-Time Sync via WebSocket

The application uses WebSocket to sync data in real-time between multiple users. For example, if both the CEO and CFO have the app open, any change made to the budget or positions will be instantly reflected on both their screens.

### WebSocket Integration

- **Real-time Data**: The WebSocket service listens for changes and updates the table and budget chart accordingly.

## Donut Chart Component

The Donut Chart component, built with Billboardjs, visualizes the department-wise budget allocation.

To update the chart data dynamically:

```typescript
updateBudget(data: any[]) {
  this.usedAmount = data.reduce((sum, item) => sum + item.y, 0) / 100;
  this.remainingAmount = this.totalBudget - this.usedAmount;
}
```

## Adding New Positions

To add new positions:

1. Click on the "+ Create Position" button.
2. A modal will appear for entering details such as designation, department, budget, and location.
3. The updated by field will be sent dynamically name will be of logged in user and time will be the current time of adding the data
4. Once submitted, the table will be updated dynamically without refreshing the page.

```typescript
openPlanningProjectModal() {
  const dialogRef = this.planningProjectModal.open(PositionModalComponent, {
    width: '720px',
  });

  dialogRef.componentInstance.dataChanged.subscribe(() => {
    this.updateTableData(); // Refresh the table data after a new position is added
  });
}
```

## Contribution Guidelines

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
