import formatString from '../format-string';
import { IMG_SIZE, LOGOS } from './constants';
import setCursorImage from '../set-cursor-image';


const findInGrandChildName = (data, childName, grandChildName) => {
  if (data && data.children) {
    const socialChild = data.children.find(child => child.name && child.name.toLowerCase() === childName.toLowerCase());
    // TODO: Simplify this
    // eslint-disable-next-line no-mixed-operators
    const child = !!socialChild && socialChild.children.find(child => child.name.toLowerCase().includes(grandChildName)) || data.children.find(child => child.name.toLowerCase().includes(grandChildName));
    if (child) {
      return child;
    }
  }
  return undefined;
}

export default function createNotebook(name, colorScheme) {
  return function define(runtime, observer) {
    const main = runtime.module();
    const fileAttachments = new Map([[`${name}.json`, `/${name}.json`]]);
    main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
    main.variable(observer("chart")).define("chart", ["partition", "data", "d3", "width", "color", "arc", "format", "radius"], function (partition, data, d3, width, color, arc, format, radius) {
            const root = partition(data);
            root.each(d => d.current = d);

            const svg = d3.create("svg")
                .attr("viewBox", [0, 0, width, width])
                .style("font-size", ".6rem");

            const g = svg.append("g")
                .attr("transform", `translate(${width / 2},${width / 2})`);

            const path = g.append("g")
                .selectAll("path")
                .data(root.descendants().slice(1))
                .join("path")
                .attr("fill", d => {
                    while (d.depth > 1) d = d.parent;
                    return color(d.data.name);
                })
                .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.7 : 0.5) : 0)
                .attr('id', d => formatString(d.data.name))
                .attr("d", d => arc(d.current))
                .on('mouseenter', setCursorImage);

            path.filter(d => d.children)
                .style("cursor", "pointer")
                .on("click", clicked);

            path.append("title")
                .attr("pointer-events", "all")
                .attr("user-select", "none")
                .attr('color', "white")
                .on("click", clicked)
                .text(d => d.data.name)

            const label = g.append("g")
                .attr("pointer-events", "all")
                .style("cursor", "pointer")
                .attr("text-anchor", "middle")
                .style("text-decoration", "none")

                .selectAll("text")
                .data(root.descendants().slice(1))
                .join("text")
                .attr("dy", "0.35em")
                .attr("fill-opacity", d => +labelVisible(d.current))
                .attr("transform", d => labelTransform(d.current))

            const circle = label.append("svg")
                .attr("r", 15 );

            circle.append("image")
                .attr("xlink:href",  function(d) { return d.data.img;})
                .attr("height", 15)
                .attr("width", 15);

            label.append('a')
                .attr("pointer-events", "all")
                .attr('user-select', (d) => {
                    return labelVisible(d) ? '' : 'none'
                })
                .attr("style", (d) => {
                    return 'user-select : none'
                })
                .style("text-decoration", "none")
                .attr('font-size', "0.6rem")
                .attr("font-family", "'matter', arial, 'Helvetica-neue', Helvetica, sans-serif")
                .attr('color', "white")
                .attr("dy", "0.35em")
                .on("click", clicked)
                .text(d => d.data.name)

            const parent = g.append("circle")
                .datum(root)
                .attr("r", radius)
                .attr("fill", "none")
                .attr("pointer-events", "all")
                .on("click", clicked);

          const imgRef = svg
            .append('image')
            .attr('xlink:href', LOGOS[name])
            .attr('width', IMG_SIZE)
            .attr('height', IMG_SIZE)
            .attr('x', -IMG_SIZE / 2)
            .attr('y', -IMG_SIZE / 2)
            .attr('style', 'transform: translate(50%, 50%); pointer-events: none')
            .attr('id', 'center-img');

          const imgEl = imgRef.node();

          const title = svg
              .append('image')
              .attr("xlink:href", data.img)
              .attr('id', 'center-img');


            const twitterEl = svg.append('text')
            .attr('style', 'font-size: 1rem; fill: white; text-align: left;')
            .attr('y', '5%')
            .attr('x', '0%')
            .on('click', (d) => {
              if (d && d.target && d.target.textContent) {
                  window.open(`https://www.twitter.com/${d.target.textContent}`, '_blank');
              }
            })

          const websiteEl = svg.append('text')
            .attr('style', 'font-size: 1rem; fill: white; text-align: left;')
            .attr('y', '12.5%')
            .attr('x', '0%')
            .on('click', (d) => {
              if (d && d.target && d.target.textContent) {
                window.open(`//${d.target.textContent}`, '_blank');
              }
            });

          const sw = svg.append('switch');
          const descriptionEl = sw.append('foreignObject');

          descriptionEl
            .attr('pointer-events', 'none')
            .attr('width', '45%')
            .attr('height', '35%')
            .attr('x', '0%')
            .attr('y', '15%')
            .attr('requiredFeatures','http://www.w3.org/TR/SVG11/feature#Extensibility')

          const paragraph = document.createElement('p')
          paragraph.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
          paragraph.classList.add('description');

          descriptionEl.node().appendChild(paragraph);
          sw.append('text').attr('x', '0%').attr('y', '15%').text('cannot display')
          const titleEl = title.node();

          function clicked(event, p) {
            const twitter = findInGrandChildName(p.data, 'social', 'twitter');
            const website = findInGrandChildName(p.data, 'links', 'website');

            if (twitter && website) {
              try {
                titleEl.textContent = p.data.name;
                const words = twitter.url.split('/');
                const handle = `@${words[words.length -1]}`;
                twitterEl.text(handle);
                  titleEl.style.userSelect = "none"
                  titleEl.style.pointerEvents = "all"
                const {host} = new URL(website.url);
                websiteEl.text(host);
                paragraph.textContent = p.data.description;
              } catch (e) {
                titleEl.textContent = p.data.name;
                titleEl.style.userSelect = "none"
                  titleEl.style.pointerEvents = "all"
                websiteEl.text('');
                twitterEl.text('');
                paragraph.textContent = '';
              }
            } else {
                websiteEl.text('');
                twitterEl.text('');
                paragraph.textContent = '';
                titleEl.style.userSelect = "none"
                titleEl.style.pointerEvents = "none"
            }

            if (p.data.url == null) {
              const img = p.data.img || (p.parent && p.parent.data.img);

              title.attr('display', 'none');

              if (!p.parent) {
                imgEl.setAttribute('href', LOGOS[name]);
                titleEl.textContent = '';
                  titleEl.style.userSelect = "none"
                  titleEl.style.pointerEvents = "none"

                // NOTE: This is kinda hacky for now because at this point I personally did not know how
                // to achieve sth similar with @observablehq/runtime.
                // @TODO proper state management
                document.querySelectorAll('.toggle-button').forEach(b => b.classList.remove('active'))
              }

              if (img) {
                imgEl.setAttribute('href', img);
                title
                  .attr('y', '5%')
                  .attr('x', '0%')
                  .attr('display', 'unset')
                  .attr('dominant-baseline', null)
                  .attr('text-anchor', null);
              }

              if (!img && p.parent) {
                titleEl.textContent = p.data.name;
                  titleEl.style.userSelect = "none"
                  titleEl.style.pointerEvents = "all"
                imgEl.setAttribute('href', LOGOS['none']);
                title
                  .attr('x', '50%')
                  .attr('y', '50%')
                  .attr('dominant-baseline', 'middle')
                  .attr('text-anchor', 'middle')
                  .attr('display', 'unset');

                // NOTE: This is kinda hacky for now because at this point I personally did not know how
                // to achieve sth similar with @observablehq/runtime.
                // @TODO proper state management
                const el = document.getElementById(`btn-${formatString(p.data.name)}`);
                if (el) {
                  el.classList.add('active')
                }
              }

              if (!img && twitterEl && websiteEl) {
                twitterEl.attr('y', '20%')
                websiteEl.attr('y', '22.5%')
              } else {
                twitterEl.attr('y', '10%')
                websiteEl.attr('y', '12.5%')
              }

              parent.datum(p.parent || root);
              root.each(
                (d) =>
                  (d.target = {
                    x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                      x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                    y0: Math.max(0, d.y0 - p.depth),
                    y1: Math.max(0, d.y1 - p.depth),
                  })
              );
            } else {
              window.open(p.data.url, '_blank');
            }

            const t = g.transition().duration(750);

            path
              .transition(t)
              .tween('data', (d) => {
                const i = d3.interpolate(d.current, d.target);
                return (t) => (d.current = i(t));
              })
              .filter(function (d) {
                return (
                  +this.getAttribute('fill-opacity') || arcVisible(d.target)
                );
              })
              .attr('fill-opacity', (d) =>
                arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
              )
              .attrTween('d', (d) => () => arc(d.current))
              .on('end', (args) => {
                title.attr('display', 'unset');
              });

                label.filter(function (d) {
                    return +this.getAttribute("fill-opacity") || labelVisible(d.target);
                }).transition(t)
                    .attr("fill-opacity", d => +labelVisible(d.target))
                    .attrTween("transform", d => () => labelTransform(d.current));
            }

            function arcVisible(d) {
                return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
            }

            function labelVisible(d) {
                return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
            }

            function labelTransform(d) {
                const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
                const y = (d.y0 + d.y1) / 2 * radius;
                return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
            }

            return svg.node();
        }
    );
    main.variable(observer("data")).define("data", ["FileAttachment"], function (FileAttachment) {
        return (
            FileAttachment(`${name}.json`).json()
        )
    });
    main.variable(observer("partition")).define("partition", ["d3"], function (d3) {
        return (
            data => {
                const root = d3.hierarchy(data)
                    .sum(d => d.value)
                    .sort((a, b) => b.value - a.value);
                return d3.partition()
                    .size([2 * Math.PI, root.height + 1])
                    (root);
            }
        )
    });
    main.variable(observer("color")).define("color", ["d3", "data"], function (d3, data) {
        if (!d3[colorScheme]) {
          throw new Error('Color Scheme not found')
        }
        return (
            d3.scaleOrdinal(d3.quantize(d3[colorScheme], data.children.length + 1))
        )
    });
    main.variable(observer("format")).define("format", ["d3"], function (d3) {
        return (
            d3.format(",d")
        )
    });
    main.variable(observer("width")).define("width", function () {
        return (
            932
        )
    });
    main.variable(observer("radius")).define("radius", ["width"], function (width) {
        return (
            width / 6
        )
    });
    main.variable(observer("arc")).define("arc", ["d3", "radius"], function (d3, radius) {
        return (
            d3.arc()
                .startAngle(d => d.x0)
                .endAngle(d => d.x1)
                .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
                .padRadius(radius * 1.5)
                .innerRadius(d => d.y0 * radius)
                .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))
        )
    });

    main.variable(observer("d3")).define("d3", ["require"], function (require) {
        return (
            require("d3@6")
        )
    });

    return main;
  }
}
