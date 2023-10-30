import { progress } from "@/common/constants";
import Container from "@/components/Container";

const Progress = () => {
  return (
    <section className="progress">
      <Container>
        <div className="progress__wrapper">
          {progress.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Progress;
