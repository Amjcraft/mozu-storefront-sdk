

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getExtras :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras'
		}),
		getExtraValueLocalizedDeltaPrices :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice'
		}),
		getExtraValueLocalizedDeltaPrice :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}?responseFields={responseFields}'
		}),
		getExtra :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}?responseFields={responseFields}'
		})		,
			addExtraValueLocalizedDeltaPrice :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice?responseFields={responseFields}'
		}),
		addExtra :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras?responseFields={responseFields}'
		})		,
			updateExtraValueLocalizedDeltaPrices :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice'
		}),
		updateExtraValueLocalizedDeltaPrice :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}?responseFields={responseFields}'
		}),
		updateExtra :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}?responseFields={responseFields}'
		})		,
			deleteExtra :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}'
		}),
		deleteExtraValueLocalizedDeltaPrice :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}'
		})	
	});
};