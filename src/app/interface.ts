export interface TableData {
    id: string;
    designation: string;
    department: string;
    budget: number;
    location: string;
    lastUpdated?: lastUpdated;
  }
  
  interface lastUpdated{
    name: string;
    date?: Date;
  }