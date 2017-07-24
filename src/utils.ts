/**
 * A collection of util methods.
 * 
 * @export
 * @class Utils
 */
export class Utils {

    /**
     * Throws a new reference error.
     * 
     * @static
     * @param {string} argumentName 
     * @memberof Utils
     */
    public static throwReferenceError(argumentName: string): void {
        throw new ReferenceError('The argument "' + argumentName + '" was null or undefined.');
    }

}