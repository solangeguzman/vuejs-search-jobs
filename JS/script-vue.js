Vue.config.devtools = true;


 new Vue({
  el: '#list-jobs',
  data: {
     jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '5/22/2021',
                  logo: './img/3.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },

                {
                  id: 2,
                  company: 'Perferendis',
                  position: 'Doctor',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '5/23/2021',
                  logo: './img/3.jpg',
                  city: 'Genova',
                  contract: 'Full Time'

                },

                {
                  id: 3,
                  company: 'Perferendis',
                  position: 'Infermiero',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '5/28/2021',
                  logo: './img/3.jpg',
                  city: 'Milano',
                  contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Veterinario',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                    created_at: '5/29/2021',
                    logo: './img/3.jpg',
                    city: 'Roma',
                    contract: 'Full Time' 
                },
                {
                    id: 5,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis',
                  created_at: '5/30/2021',
                  logo: './img/3.jpg',
                  city: 'Piacenza',
                  contract: 'Full Time'
                }
            ],
            starred:[1,2,3],
            applied:[4,5],
            options:[
              {id:1, value: 'annunci preferiti'},
              {id:2,value:'candidature'}
            ],
            selected:1,
            text: ''
           },
           methods: {
            preferito: function (index) {
                if (!this.starred.includes(index + 1)) {
                    this.starred.push(index + 1);
                } else {
                    this.starred.splice(index, 1);
                }
            },
            appliEd: function (index) {
                if (!this.applied.includes(index + 1)) {
                    return;
                } else {
                    return 'applied';
                }
            },
            apply: function (index) {
               if (!this.applied.push(index + 1)){
                 return;
               }else{
                  this.starred.splice(index, 1);
                  setTimeout(() => {
                    this.cand = true;
                  }, 1000);
                } 
              }

        }
});



