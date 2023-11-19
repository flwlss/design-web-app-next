interface IMeetingItem {
  title: string;
  description: string;
}

const MeetingItem = ({ title, description }: IMeetingItem) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MeetingItem;
