interface panelValue {
  date: string;
  departure: any;
  arrival: any;
  departureTime: string;
  arrivalTime: string;
  trainType: any;
}

interface SearchPanelProps {
  onSearch(params: panelValue): void;
}

export default SearchPanelProps;
