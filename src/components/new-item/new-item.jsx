import { useContext } from "react";
import { UserContext } from "../providers/UserProvider.component";

const NewPost = (props) => {
  const { user } = useContext(UserContext);
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-group">
        <label>Your Post</label>
        <textarea name="body" cols="30" rows="10" required />
      </div>
      <div className="input-group">
        <label>Post Image</label>
        <input type="text" name="imgURL" />
      </div>
      <div className="actions-group">
        <button type="submit" disabled={user.role === "guest"}>
          Post Status
        </button>
        <button type="reset">Clear</button>
      </div>
    </form>
  );
};

export default NewPost;
