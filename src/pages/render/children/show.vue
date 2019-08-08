<script>
export default {
  	render: (h, params) => {console.log(this)
  		return h('div', {
  			'class': {
  				'p': true
  			},
  			style: {
  				'color': '#f56c6c',
  				'fontSize': '20px'
  			},
  			attrs: {
  				'id': 'tit'
  			},
  			props: {
  				info: Object
  			}
  		}, ['test'])
  	},
  	fn () {
  		console.log('click')
  	}
}
</script>