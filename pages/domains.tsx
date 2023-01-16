import Head from 'next/head'
import DomainTable from '../components/domains/DomainTable';
import Loading from '../components/Loading';
import SubHero from '../components/SubHero';
import { useDomainSort } from '../hooks/useDomainSort';


export default function domains() {
    const {filteredList, currentFilter, loading, updateSort} = useDomainSort()
    
    return (
        <div>
          <Head>
            <title>Domains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <SubHero>
            <h1>Domäner</h1>
          </SubHero>

          {loading ? <Loading /> : filteredList ? <DomainTable currentFilter={currentFilter} updateSort={updateSort} domains={filteredList} /> : "Inga domäner kunde hittas"}         
        </div>
      )
}
