import bgGrid from '/assets/ServicesGrid.svg';
import './gridBackground.scss';

function GridBackground() {
    return (
        <div className="services__grid__background">
            <figure>
                <img src={bgGrid} alt="grid" width={100} />
            </figure>
        </div>
    );
}

export default GridBackground;
