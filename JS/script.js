Vue.config.devtools = true;

new Vue(
    {
        el: '#list-jobs',
        data: {
            jobs: [
              {
                id: 1,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '06/04/2021',
                logo: './img/3.jpg',
                city: 'Roma',
                contract: 'Full Time'
              },

              {
                id: 2,
                company: 'MMEDIA',
                position: 'Collaboratore Back Office',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '07/07/2021',
                logo: './img/3.jpg',
                city: 'Bologna',
                contract: 'Tempo Determinato'

              },

              {
                id: 3,
                company: 'SANIPIÙ',
                position: 'Fisioterapista',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '10/07/2021',
                logo: '',
                city: 'Milano',
                contract: 'Full Time'
              },
              {
                  id: 4,
                  company: 'PETLANDIA',
                  position: 'Veterinario',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '05/08/2021',
                  logo: '',
                  city: 'Roma',
                  contract: 'Tempo Determinato' 
              },
              {
                  id: 5,
                company: 'MEDIAWEB',
                position: 'web design',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '05/9/2021',
                logo: '',
                city: 'Piacenza',
                contract: 'Full Time'
              },
              {
                id: 6,
                company: 'AZIENDA OSPEDALIERA',
                position: 'Doctor',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '5/23/2021',
                logo: '',
                city: 'Genova',
                contract: 'Full Time'

              },

              {
                id: 7,
                company: 'TEZENIS',
                position: 'STORE MANAGER',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '5/28/2021',
                logo: '',
                city: 'Milano',
                contract: 'Full Time'
              },
              {
                  id: 8,
                  company: 'ZARA',
                  position: 'commessa',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '5/29/2021',
                  logo: '',
                  city: 'Roma',
                  contract: 'Full Time' 
              },
              {
                  id: 9,
                company: 'KIKO',
                position: 'Adetto cassa',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                created_at: '5/30/2021',
                logo: '',
                city: 'Piacenza',
                contract: 'Full Time'
              },
            ],
            starred: [4,5,6,7,8,9,],
            applied: [1,2,3],
            cand: false,
        },
        methods: {
            addPrefer:function(indexId){
                if(!this.starred.includes(indexId)){
                    this.starred.push(indexId);
                }else{
                    this.starred.splice(index,1); 
                }
            },
            appliedd:function(indexId){
                if(!this.applied.push(indexId)){
                   this.starred.includes(indexId)
                }else{
                    let index = this.starred.indexOf(indexId);   
                    this.starred.splice(index,1);
            }
            setTimeout(()=>{
                    this.cand = true;
                }, 1000);
            setTimeout(()=>{
              this.cand=false;
            },3000);
                
          }

        }
    }

);