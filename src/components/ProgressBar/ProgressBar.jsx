import ProgressBar from 'react-bootstrap/ProgressBar';

function StripedExample() {
  return (
    <div>
      <ProgressBar striped variant="secondary" now={90}/>
      <ProgressBar striped variant="info" now={80} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={30} />
    </div>
  );
}

export default StripedExample;