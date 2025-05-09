import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/auth/login";
import { PostPage } from "./views/posts/posts";
import { ProtectedRoute } from "./component/ProtectedRoute";
import { HomePage } from "./views/home/home";
import { ProfilePage } from "./views/profile/profile";
import { DetailPostPage } from "./views/posts/detailPosts";
import { WritePostPage } from "./views/posts/writePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/posts/:postID"
        element={
          <ProtectedRoute>
            <DetailPostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <PostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-post"
        element={
          <ProtectedRoute>
            <WritePostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
