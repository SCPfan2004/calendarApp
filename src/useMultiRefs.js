function useMultiRefs(initial_value) {

    const refs = new Set([]);

    function getRefs() {
        if(refs.size === 0 && initial_value) {
            return initial_value;
        }

        return Array.from(refs);
    }

    function addRef(ref) {
        if(ref) {
            refs.add(ref);
        }
    }

    return [getRefs, addRef];
}

export default useMultiRefs;