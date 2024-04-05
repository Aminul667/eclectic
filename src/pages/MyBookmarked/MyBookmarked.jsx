import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import "./MyBookmarked.css";

const MyBookmarked = () => {
  const params = useLocation();
  const email = params.state.email;
  console.log(params);

  const {
    data: myBookmarks = [],
    // isLoading,
    // isError,
    // refetch,
  } = useQuery({
    queryKey: ["bookmark"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookmarks/${email}`);
      return res.json();
    },
  });

  console.log(myBookmarks);
  return (
    <div className="bookmark-container">
      <h2>Bookmarked: {myBookmarks.length}</h2>
      <table className="bookmarked-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBookmarks.map((bookmark, count=0) => (
            <tr key={bookmark._id}>
              <td>{count+1}</td>
              <td>{bookmark?.title}</td>
              <td>
                <button className="btn-primary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookmarked;
