import { render, screen } from "@testing-library/react"
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock

describe('<PostCard />', () => {
    it('shoul render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /TITLE 1/i }))
            .toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props}/>);
        expect(container).toMatchSnapshot();
    })
})