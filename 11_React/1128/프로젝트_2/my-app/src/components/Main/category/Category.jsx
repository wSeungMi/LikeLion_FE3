import "./category.css";

export default function Category({ category }) {
    console.log(category);
    // 조건부 렌더링 방법
    // const renderingContents = [];
    // for (const item of category) {
    //     renderingContents.push(<dd key={item}>{item}</dd>);
    // }

    return (
        <dl class="category">
            <dt class="a11y-hidden">Category</dt>
            {category.map((item, index) => (
                <dd key={index}>{item}</dd>
            ))}
        </dl>
    );
}
