interface TabsProps {
  titles: string[];
  onClick: (index: number) => void;
  activeTab: number;
}

export const Tabs = ({
  titles,
  onClick,
  activeTab,
}: TabsProps): React.ReactElement => {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div className="flex justify-center">
        {titles.map((title, index) => (
          <button
            key={index}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              backgroundColor: activeTab === index ? "#4e4e4e" : "black",
              padding: "5px 8px",
              borderRadius: "8px",
              transition: "0.4s",
            }}
            onClick={() => onClick(index)}
            className="font-semibold text-white mx-3"
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};
