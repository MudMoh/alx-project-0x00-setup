import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC = () => {
  return (
    <div>
          <h1 className=" text-xl font-extralight">Landing Page</h1>
          <Card />
          <Button title="Click Me" onClick={() => alert("First Button clicked!")} />
          <Card />
          <Button title="Click Me" onClick={() => alert("3rd Button clicked!")} />
          <Card />
          <Button title="Click Me" onClick={() => alert("2nd Button clicked!")} />
    </div>
  )
}
export default Landing