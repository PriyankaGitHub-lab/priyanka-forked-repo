# React Developer Take-Home Test

## Overview

This is a simple React application that demonstrates fetching data from a free API and displaying it in a list. The test focuses on core React concepts including component mounting, API integration, and data display.

**Please read `INSTRUCTIONS.md` for more information.**

## Requirements

### Core Requirements

1. **Mount a component** that fetches data from a free API
2. **Display the fetched data** in a list format
3. Use **Material-UI (MUI)** or similar UI library for styling

### Bonus Points

- ✅ **Handle loading states** - Show loading indicators while fetching data
- ✅ **Use correct keys** - Properly implement React keys for list items
- ✅ **TypeScript best practices** - Use proper typing, interfaces, and type safety

## API Endpoint

The application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) which provides free fake data for testing and prototyping.

**Endpoint:** `https://jsonplaceholder.typicode.com/posts`

This API returns an array of posts with the following structure:

```typescript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
```

## Project Structure

```
react-take-home-test/
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── components/
│   │   ├── PostList.tsx
│   │   ├── PostCard.tsx
│   │   └── LoadingSpinner.tsx
│   ├── types/
│   │   └── api.ts (Define types for optional API service)
│   ├── services/
│   │   └── api.ts (Optional - if want to abstract API layer. You could also use a library like `fetch` or `axios` to make the API calls directly in the component.)
│   ├── App.tsx
│   └── index.tsx
└── public/
    └── index.html
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Screenshot

Here's how the application should look when running:

![React Take-Home Test Screenshot](./docs/screenshot.png)

_The app displays a list of posts fetched from the JSONPlaceholder API, with Material-UI styling and proper loading states._

## Evaluation Criteria

### Technical Implementation (60%)

- ✅ Proper component structure and organization
- ✅ Correct use of React hooks (useState, useEffect etc)
- ✅ Proper error handling for API calls
- ✅ Loading state management

### Code Quality (25%)

- ✅ Follows React best practices
- ✅ Clean, readable code with good comments
- ✅ Proper TypeScript usage

### UI/UX (15%)

- ✅ Clean design using MUI (Default styling is fine)
- ✅ Proper loading indicators
- ✅ Consistent styling and layout

### Core Features

1. **Data Fetching**: Component should fetch posts from the API on mount
2. **List Display**: Display posts in a clean, organized list
3. **Loading State**: Show a loading spinner while fetching data
4. **Error Handling**: Display error messages if API call fails

### UI Components

Please note, you do not have to follow the exact file naming here. This is a guide. You can break up you components how you see fit.

- **PostCard**: Individual post display component
- **PostList**: Container component that manages the list
- **LoadingSpinner**: Loading indicator component

## Bonus Challenges (Optional)

If you want to go above and beyond, consider implementing:

1. **Pagination**: Load posts in pages rather than all at once
2. **Search/Filter**: Add ability to search through posts
3. **Post Details**: Click on a post to view full details
4. **Unit Tests**: Add Jest/React Testing Library tests
5. **ErrorDisplay**: Error message component

## Submission and followup

Upon submission your completed code we will have a follow up call where we can discuss:

- A brief description of your implementation approach
- Any challenges you encountered and how you solved them
- Any additional features you implemented beyond the requirements

## Time Estimate

This test should take approximately 2-4 hours to complete, depending on your experience level and how many bonus features you implement.

Good luck! 🚀
