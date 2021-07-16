import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { db } from "../../firebase";
import { useRouter } from "next/dist/client/router";
import Login from "/components/Login";
import { getSession, signOut, useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
// import TextEditor from "/components/TextEditor";

function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span>
          <Icon name="description" size="5xl" color="purple" />
        </span>
      </header>
    </div>
  );
}

export default Doc;
