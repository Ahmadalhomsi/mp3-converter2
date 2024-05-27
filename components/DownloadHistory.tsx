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
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Download History</h2>
      <ul>
        {downloadHistory.map((item, index) => (
          <li key={index} className="mb-2 cursor-pointer hover:bg-gray-800 rounded-lg p-2" onClick={() => onHistoryItemClick(item.url)}>
            <span className="mr-2">{item.url}</span> - <span className="mr-2">{item.fileName}</span> - <span>{formatDate(item.timestamp)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadHistory;
