SIZES=16 19 38 48 128
ICONS=$(foreach size, $(SIZES), icons/icon$(size).png)

extension.zip : $(ICONS) LICENSE manifest.json background.js popup.js popup.html
	zip $@ $^

icons : $(ICONS)

icons/icon%.png :: icons/icon.svg
	SIZE=$(patsubst icons/icon%.png,%,$@) &&\
		rsvg-convert -w $${SIZE} -h $${SIZE} "$<" -o "$@"

#	OUTPUT="$@" &&\
#		PREFIX=$${OUTPUT%.png} &&\
#		SIZE=$${PREFIX#icons/icon_} &&\
#		rsvg-convert -w $$SIZE -h $$SIZE $< -o $@

clean: /dev/null
	rm -f icons/icon*.png
	rm -f extension.zip
