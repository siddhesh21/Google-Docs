import { useRouter } from "next/dist/client/router";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-gray-800
    text-sm cursor-pointer"
    >
      <Icon name="article" size="3xl" color="purple" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" size="3xl" />
      </Button>
    </div>
  );
}

export default DocumentRow;

// 3:04:59
