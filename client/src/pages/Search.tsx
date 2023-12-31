import { useState } from 'react'
import SearchingHook from '../hooks/SearchingHook';
import Spinner from '../components/spinner/Spinner';
import GridContainer from '../components/containers/GridContainer';
import VideoGridCard from '../components/cards/VideoGridCard';
import Container from '../components/containers/Container';
import { Link } from 'react-router-dom';

export default function Search() {
    const [searchItem, setsearchItem] = useState("");
    const [loader, setLoading] = useState<boolean>(false);
    const searcResults = SearchingHook({ searchItem, setLoading });
    return (
        <div>
            <div className='md:p-2 p-1 flex justify-between items-center  border-b-2 border-gray-200'>
                <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-400" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </div>
                <div className="w-full flex max-w-[75%] space-x-[12px] items-center" >
                    <div className="w-full flex p-1 md:p-2 rounded-2xl border border-gray-400 space-x-[8px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-400 stroke-2" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="search" id="search" value={searchItem} onChange={(e) => setsearchItem(e.target.value)} className="focus:outline-none border-none w-full" autoComplete="off" placeholder="Search videos" />
                    </div>
                </div>
                <div className="p-2 rounded-full border border-gray-500 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-gray-500" viewBox="0 0 16 16">
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                    </svg>
                </div>
            </div>
            {loader ?
                <Spinner />
                :
                searcResults?.length ?
                    <Container>
                        <GridContainer>
                            {searcResults.map((e, i) =>
                                <Link to='/watch' state={e} key={i}>
                                    <VideoGridCard data={e} />
                                </Link>
                            )}
                        </GridContainer>
                    </Container>
                    :
                    <div>not Found</div>
            }
        </div>
    )
}
