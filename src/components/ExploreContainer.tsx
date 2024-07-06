import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Hello {window.webxdc.selfName}, ready to create an app?</strong>
      <p>Start with Ionic UI Components:</p>
      <p>https://ionicframework.com/docs/components</p>
    </div>
  );
};

export default ExploreContainer;
