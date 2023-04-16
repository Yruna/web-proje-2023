import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title,imageUrl} = category;
    return (
        <div className="category-container">
            <img className="background-image" style={
                {
                    backgroundImage: `url(${imageUrl})` 
                }
            } alt="" />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Buy now</p>
            </div>
        </div>
    );
}

export default CategoryItem;