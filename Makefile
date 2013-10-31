SIZES=16 19 38 48 128
ICONS=$(foreach size, $(SIZES), icons/icon$(size).png)

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
