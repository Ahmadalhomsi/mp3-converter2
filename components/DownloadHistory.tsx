// DownloadHistory.tsx

import React from "react";

/*
 Interface ve oop componentler Ibrahim Arda Doğan a aittir. Kalan kısım ise Ahmad Alhomsi ye aittir.
 */
interface DownloadItem {
  url: string;
  fileName: string;
  timestamp: Date;
}

/*
 Interface ve oop componentler Ibrahim Arda Doğan a aittir. Kalan kısım ise Ahmad Alhomsi ye aittir.
 */
interface DownloadHistoryProps {
  downloadHistory: DownloadItem[];
  onHistoryItemClick: (url: string) => void; // Callback function to set the input value
}

const DownloadHistory: React.FC<DownloadHistoryProps> = ({ downloadHistory, onHistoryItemClick }) => {
  const formatDate = (timestamp: Date) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Format the timestamp to a readable string
  };

  return (
    <div className="mt-4 w-full max-w-3xl mx-auto truncate">
      <h2 className="text-lg md:text-xl font-semibold mb-2">Download History</h2>
      <ul className="space-y-2">
        {downloadHistory.map((item, index) => (
          <li 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-700 hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-white" 
            onClick={() => onHistoryItemClick(item.url)}
          >
            <div className="flex-1 truncate ">
              <span className="block  font-bold truncate">{item.fileName}</span>
              <span className="block sm:inline text-sm truncate">{item.url}</span>
            </div>
            <span className="text-sm sm:text-right">{formatDate(item.timestamp)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadHistory;
