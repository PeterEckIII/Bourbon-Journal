import EmojiTextInput from "./EmojiTextInput";

interface RatingProps {
  changeHandler: (e: any) => void;
}

export default function TestRating({ changeHandler }: RatingProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Rating</h5>
      <EmojiTextInput
        name="value"
        labelName="Value for Money"
        changeHandler={(e) => changeHandler(e)}
        type="number"
        emoji="💰"
      />

      <EmojiTextInput
        name="overallRating"
        labelName="Overall Rating"
        changeHandler={(e) => changeHandler(e)}
        type="number"
        emoji="💯"
      />
    </div>
  );
}
