import CommentList from "./CommentList";
const commentsData = [
  {
    name: "User123",
    text: "I love programming in JavaScript!",
    replies: [
      {
        name: "CoderGirl",
        text: "JavaScript is so versatile.",
        replies: [
          {
            name: "TechExplorer",
            text: "I'm always discovering new things with JavaScript.",
          },
          {
            name: "FrontendDev",
            text: "Building user interfaces with JS is exciting.",
            replies: [
              {
                name: "UIEnthusiast",
                text: "Agreed, UI development is a creative process.",
              },
              {
                name: "ReactLover",
                text: "React takes JavaScript to the next level.",
              },
            ],
          },
        ],
      },
      {
        name: "CuriousMind",
        text: "What's your favorite JavaScript feature?",
      },
    ],
  },
  {
    name: "TechGeek",
    text: "Exploring AI and machine learning!",
    replies: [
      {
        name: "DataNinja",
        text: "Data manipulation is a core skill for AI.",
        replies: [
          {
            name: "MLWizard",
            text: "Machine learning algorithms are fascinating.",
            replies: [
              {
                name: "AIEnthusiast",
                text: "AI has the potential to revolutionize industries.",
              },
              {
                name: "FutureML",
                text: "I aspire to become an AI researcher.",
              },
            ],
          },
        ],
      },
      {
        name: "AIlearner",
        text: "Tell me more about neural networks.",
      },
    ],
  },
];

export default function CommentContainer() {
  return (
    <>
      <div className="rounded-lg p-4 shadow-md col-span-12 md:col-span-8">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          <CommentList comments={commentsData} />
        </div>
      </div>
    </>
  );
}
