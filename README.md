# YouTube to MP3 Converter

This is a YouTube to MP3/MP4 converter built with Next.js. It allows users to input a YouTube link and download the corresponding video in MP3 or MP4 format. The application also features a download history and a premium user experience without ads.

## Features

- Convert YouTube videos to MP3 or MP4.
- Select the quality of the video (lowest or highest).
- Display thumbnail of the video.
- Maintain download history.
- Premium user experience without ads.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Node.js (v18 or higher)
- npm

### Installing

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/youtube-to-mp3-converter.git
    cd youtube-to-mp3-converter
    ```

2. **Set up environment variables:**

    Create a `.env` file in the root of the project and add any necessary environment variables.

3. **Build and run the application using Docker:**

    ```bash
    docker-compose up --build
    ```

    This will build the Docker image and start the application on `http://localhost:3000`.

### Running Locally

If you prefer to run the application without Docker:

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open `http://localhost:3000` with your browser to see the result.

## Usage

1. Enter a YouTube link in the input field.
2. Select the desired quality of the video (lowest or highest).
3. Click "Download MP3" or "Download MP4" to start the download.
4. The download history will be updated, and the thumbnail of the video will be displayed.

## Project Structure

- `app/`: Contains the main application files.
  - `page.tsx`: The main page of the application.
  - `layout.tsx`: Layout file for the application.
- `components/`: Contains React components used in the application.
- `public/`: Public assets such as images and fonts.
- `styles/`: Global styles for the application.
- `docker-compose.yml`: Docker Compose configuration file.
- `Dockerfile`: Dockerfile for building the Docker image.

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
- [react-hot-toast](https://react-hot-toast.com/) - For notifications.
- [youtube-metadata-from-url](https://www.npmjs.com/package/youtube-metadata-from-url) - Get metadata from YouTube video URLs.

