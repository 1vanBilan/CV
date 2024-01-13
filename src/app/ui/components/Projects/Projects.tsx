interface ProjectsProps {
  title: string;
}

export const Projects = ({ title }: ProjectsProps): React.ReactElement => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          backgroundColor: "black",
          padding: "6px 12px",
          fontSize: "40px",
          textAlign: "center",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {title}
      </div>
    </div>
  );
};
