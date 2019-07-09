/**
 * @file mofron-comp-modalfil/index.js
 * @brief modal filter component for mofron
 *        apply a dim filter to the entire screen as when displaying a modal window
 * @feature modal windows can be easily implemented by adding child components to this component
 *          it is possible to make the back look like frosted glass (blur)
 * @attention default visible() is false
 *            this comp must be positioned to root for enabling the "blur" function
 * @author simpart
 */
const mf = require("mofron");
const Blur = require("mofron-effect-blur");
const SyncWin = require("mofron-effect-syncwin");

mf.comp.ModalFil = class extends mf.Component {
    
    /**
     * initialize component
     *
     * @param (component/object) component: child component
     *                           object: component options
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("ModalFil");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.effect(new SyncWin());
            this.style({
                'position' : 'fixed',
                'z-index'  : '9999',
                'top'      : '0rem',
                'left'     : '0rem'
            });
            /* set default color */
            this.baseColor([240,240,240,0.5]);
            this.visible(false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set blur effect
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
            if ( (null === this.parent()) ||
                 (null === this.blur()) ) {
                return;
            }
            let pchd = this.parent().child();
            for (let pc in pchd) {
                if (this.getId() !== pchd[pc].getId()) {
                    pchd[pc].effect([
                        new Blur({ value: this.blur(), tag: "ModalFil", eid: 2 }),
                        new Blur({ value: "0rem",      tag: "ModalFil", eid: 3 })
                    ]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set backgrond color
     *
     * @param (string(color)/array(r,g,b)) backgrond color
     * @return (string) backgrond color
     * @type parameter
     */
    mainColor (prm) {
        try { return this.baseColor(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set backgrond color
     *
     * @param (string(color)/array(r,g,b)) backgrond color
     * @return (string) backgrond color
     * @type parameter
     */
    baseColor (prm) {
        try {
            if ((true === Array.isArray(prm)) && (3 === prm.length)) {
                prm.push(0.5);
            }
            return super.baseColor(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur value
     *
     * @param (string (size)) blur value
     * @return (string) blur value
     * @type parameter
     */
    blur (prm) {
        try { return this.member("blur", "string", prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * execute blur effect
     *
     * @type private
     */
    visible (p1, p2) {
        try {
            if (('boolean' === typeof p1) && (null !== this.parent())) {
                let pchd = this.parent().child();
                for (let pc in pchd) {
                    let blur = pchd[pc].effect(["Blur","ModalFil"]);
                    if ( (null === blur) || (undefined === blur[1]) ) {
                        continue;
                    }
                    blur[(true === p1) ? 0 : 1].execute();
                }
            }
            return super.visible(p1, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.ModalFil;
/* end of file */
