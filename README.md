## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed

We would like you to clone this repository and amend the home page to display a list of Cards with the launch data retrieved from the spacex data api. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v3/launches

Your solution should cover the following tasks:

- Make api request on page load
- Store response json into component state
- Display data top 10 items

The data that we would like you to display are:

- mission_name
- launch_date_utc
- from rocket object
  - list core_serial from the cores array in first_stage
  - payload_id and payload_type from payloads array in second_stage
- display the image from mission_patch_small in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Note
flight_number as a unique property for each launch object.

---

## Matts Notes

- Create a list component with dummy data
- Investigate what params are available on the API
  - https://docs.spacexdata.com/#bc65ba60-decf-4289-bb04-4ca9df01b9c1
  - Nice! They have pagination and filters to only return the requested keys
- Make a hook and get the data
- Render the data on the page
- Add types
- Styling

### Next Steps

- allow user to update the pagination
- move styles to a folder next to the component, with component tests, storys etc
- better handling of conditional classNames
- date formatting library??
- Tidy the CSS - I'm not familar with best practices for CSS modules

### Tests to write

- Check the API is only being called once
- The correct status badge is shown
- Failure reasons are only shown when the launch failed
- UI states for API - loading, error, success
- Empty state
- Pagination - correct number of results, results update when the page updates
