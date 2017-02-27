/**
 * Created by claudio on 25/02/17.
 */

@registerDynamicValueClass
class CatenisStorageSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisStorageSelectDynValue';
    static title = 'Catenis Message Storage Scheme Selection';
    static inputs = [
        DynamicValueInput('storage', 'Storage', "Select", {
            "choices": {
                "auto": "1 - Auto",
                "embedded": "2 - Embedded",
                "external": "3 - External"
            }
        })
    ];

    evaluate(context) {
        return this.storage;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.storage;
    }
}
