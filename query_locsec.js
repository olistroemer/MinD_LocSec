/*
 * Queries the corresponding LocSec area for a given PLZ
 */
function query_locsec(plz){
    if (plz < 0 || plz > 99999)
        throw 'Invalid PLZ given: ' + plz;
    for (var i = 0; i < LOCSECS.length - 1 && plz >= LOCSECS[i+1][0]; ++i);
    return LOCSECS[i][1];
}

/* Generate locsecs.js:
 *
 * ```
 * { echo 'var LOCSECS = ['; {{ xclip -o; echo } | awk -v FS=$'\t' '{if ($2)
 * {V=$1; $1=$2}; split($1,p,","); gsub(" +$","",V); print p[1]+0 ", \"" V
 * "\"]," }' | sort -n | sed 's/^/\t[/;$s/,$//' }; echo '];' } >locsecs.js
 * ```
 */
