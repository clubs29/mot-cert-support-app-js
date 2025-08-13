import { MemoryRouter } from 'react-router-dom';
import Report from '../components/Report';
import { render } from '@testing-library/react';
import nock from 'nock';

describe('Report component', () => {

    it('renders correctly', () => {
        const {asFragment} = render(<MemoryRouter>
                <Report />
            </MemoryRouter>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders a single project in a report', async () => {
        await nock('http://localhost')
            .get('/v1/report')
            .reply(200, {
                "total": 5,
                "projects" : [{
                        "id":  1,
                        "name": "Project 1",
                        "hours" : 5
                    }]
                });

        setTimeout(async () => {
            const {findByText, asFragment} = render(<MemoryRouter>
                <Report />
            </MemoryRouter>);
    
            await findByText('Project 1');
    
            expect(asFragment()).toMatchSnapshot();
        }, 1000);

    });

    it('renders multiple projects in a report', async () => {
        await nock('http://localhost')
            .get('/v1/report')
            .reply(200, {
                "total": 10,
                "projects" : [{
                        "id":  1,
                        "name": "Project 1",
                        "hours" : 5
                    }, {
                        "id":  2,
                        "name": "Project 2",
                        "hours" : 5
                    }]
                });

        setTimeout(async () => {
            const {findByText, asFragment} = render(<MemoryRouter>
                <Report />
            </MemoryRouter>);

            await findByText('Project 2');

            expect(asFragment()).toMatchSnapshot();
        });
    });

});