import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC = () => {
  return (
    <div>
          <h1 className=" text-xl font-extralight">Landing Page</h1>
          <Card />
          <Button
        title="Small Rounded-sm"
        shape="rounded-sm"
        size="small"
        styles=""
        onClick={() => alert("Small Rounded-sm Button clicked!")}
      />
          <Card />
          <Button
        title="Medium Rounded-md"
        shape="rounded-md"
        size="medium"
        styles=""
        onClick={() => alert("Medium Rounded-md Button clicked!")}
      />
          <Card />
          <Button
        title="Large Rounded-full"
        shape="rounded-full"
        size="large"
        styles=""
        onClick={() => alert("Large Rounded-full Button clicked!")}
          />
          <Button
        title="Large Rounded-lg"
        shape="rounded-lg"
        size="large"
        styles=""
        onClick={() => alert("Large Rounded-lg Button clicked!")}
      />
    </div>
  )
}
export default Landing