App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    var adoptionInstance;
	App.contracts.Adoption.deployed().then(function(instance) {
	  adoptionInstance = instance;
	  return adoptionInstance.getAdopters.call();
	}).then(function(adopters) {
	  for (i = 0; i < adopters.length; i++) {
		if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
		  $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
		}
	  }
	}).catch(function(err) {
	  console.log(err.message);
	});
 
    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    var adoptionInstance;
	web3.eth.getAccounts(function(error, accounts) {
	  if (error) {
		console.log(error);
	  }

	  var account = accounts[0];
	  App.contracts.Adoption.deployed().then(function(instance) {
		adoptionInstance = instance;

		// Execute adopt as a transaction by sending account
		return adoptionInstance.adopt(petId, {from: account});
	  }).then(function(result) {
		return App.markAdopted();
	  }).catch(function(err) {
		console.log(err.message);
	  });
	});

		 
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
